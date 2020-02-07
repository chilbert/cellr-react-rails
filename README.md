# Cellr App

A Rails/React app that allows the user to keep track of their favorite wineries. The user can also add a winery if their favorite does not exist in the database.

### Installation
1. Fork and clone ([cellr-react-rails](https://github.com/chilbert/cellr-react-rails)) 
2. `cd` into the app directory for `cellr-react-rails`
3. Type `bundle install` to install dependencies
4. Create the database by typing   `rails db:migrate`
5. Seed the database with   `rails db:seed`
6. Type `rake start` to launch a local server on `http://localhost:4000`.
    - This app uses foreman and `rake start` will run our Procfile which includes commands to start both the web and API servers at the same time on ports :4000 and :3000 respectively.
7. Using a web browser visit `http://localhost:4000`

```please note that the React app lives in "/cellr-app" from the root directory```


### Usage
User can visit the wineries page and view all wines that have been stored in the database. Wineries require a name and a location.  The user can favorite any winery they see that is one of their favorites. The user can also add wineries to the wineries listed if they can not find what they are looking for.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/chilbert/cellr-react-rails.

## License
The gem is available as open source under the terms of the  [MIT License](https://opensource.org/licenses/MIT).