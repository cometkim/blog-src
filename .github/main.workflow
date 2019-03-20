workflow "My Workflow" {
  on = "pull_request"
  resolves = ["Cleankeeper"]
}

action "Cleankeeper" {
  uses = "cometkim/cleankeeper@master"
  secrets = ["GITHUB_TOKEN"]
}
