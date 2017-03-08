# Emoji Ripper

![](https://pbs.twimg.com/profile_images/484392192367001600/mdqIoivl_400x400.jpeg)

Downloads a team's Slack emojis and formats them as a YAML file, for use with emojipacks.

When used in conjunction with [emojipacks](https://github.com/lambtron/emojipacks), this tool allows for downloading and re-uploading emojis across multiple slack teams. Ideal if you have multiple teams that want to share emojis, such as different friend groups, school groups, or others!

This project requires node 6 (or higher) and yarn as dependencies.


## Setup

1. Download this repo

2. Run `make bootstrap` from the terminal in the repo folder to install the utility's dependencies

3. Install `emojipacks` with `yarn install -g emojipacks` (npm works as well)

4. Obtain a slack legacy token for the team you are looking to export emojis from at [this url](https://api.slack.com/custom-integrations/legacy-tokens)

5. Paste the token into default.example.json, give your emoji pack a name, and save the file as default.json

6. run `make start` in the repo folder

7. All done! It should only take a moment to export the emojis to a yaml file.

8. Run `emojipacks` in your terminal, and follow the instructions. The path to your emoji yaml file is printed to the terminal when you run `make start` above.

9. Once `emojipacks` has run, you should have access to your old emojis in your new team! Yay!
