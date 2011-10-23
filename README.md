Bored Games
===========

Bored Games is an online checkers game that allows players to move pieces in real time and watchers to view the game as it proceeds. There are NO RULES enforced in code. Bored Games simply provides the board, everyone knows the rules of checkers... just don't be a dick. Think of it like playing checkers in the park. You COULD move the other persons piece, or move out of turn or make an illegal move, but you wouldn't. Do the same here.

Implementation
--------------

The backend is a node.js app using Express and Nowjs.

Moves are transmitted using Websockets (Nowjs)

Games will be created from a Ruby app running on Heroku, people will login using Facebook.

Current game conditions will be stored to Redis.

Each checkers server will be share nothing. This means we should be able to run as many EC2 instances as we like. The Ruby app will look at the number of connections (websocket) on each server and start each new game on the server with the fewest connections. All players and watchers of a single game must connect to the same server.