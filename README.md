# PushAll
Command line git add, commit with message and push

# Installation
```
npm install -g git+https://github.com/ddikman/PushAll.git
```

# Usage
```
pushall "message"
```

# What does it do?
It simply takes the parameter given and adds into the following:
```
git add -A && git commit -m "%0" && git push
```

Simply, adding all changes, committing with the message and then pushes.
