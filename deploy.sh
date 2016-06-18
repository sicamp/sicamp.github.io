#!/usr/bin/env bash

status=$(git status --porcelain -b 2> /dev/null)

Red="\e[0;31m"
Green="\e[0;32m"
Color_Off="\e[0m"

log_error() {
    echo
    echo -e "[${Red}ERR${Color_Off}] $1"
}

log_info() {
    echo
    echo -e "[${Green}LOG${Color_Off}] $1"
}

check_updated() {
    local updated=$($1 | grep -q '^## .*behind')

    if [ -n "$updated" ]; then
        log_error "Your branch is out of date; Please make"
        echo "    git pull"
        exit 1;
    fi
}

get_branch() {
    ref=$(command git symbolic-ref HEAD 2> /dev/null) || \
    ref=$(command git rev-parse --short HEAD 2> /dev/null) || return
    echo "${ref#refs/heads/}"
}

restore() {
    git checkout $branch
}

build() {
    npm run build
}

commit() {
    log_info "go to master"
    git checkout master
    git pull --rebase origin master

    log_info "prepare files"
    move_files

    log_info "commit"
    committed=$(git commit -m ':up:' | grep '^nothing to commit')

    if [ -z "$committed" ]; then
        git show HEAD --stat
    else
        log_error "nothing to commit"
        exit 1
    fi
}

move_files() {
    for i in build/dist/*; do
        local here=$(echo "${i#build/dist/}")
        rm -Rf $here
        mv $i .
        git add $here
    done
}

# Check if this branch is up-to-date
check_updated $status

# Save branch
branch=$(get_branch)

# Stash changes
git stash

# Prepare to build
build
commit

read -p "Deploy this changes? [Y/N]:" -n 1 -r
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    log_error "You've canceled the deploy"
    restore
    exit 1
fi

git push
log_info "Deployed"
echo
restore
