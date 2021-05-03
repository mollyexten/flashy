# flashy
A flashcard app: https://flashy-app.netlify.app/

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**flashy** is a mobile-first flashcard app. After signing up, users can create and modify their own flashcards, which are organized into decks. **flashy** can be used for increasing vocabulary or remembering terms and concepts in a specific subject.


<br>

## MVP

The **flashy** MVP is a well-organized "React on Rails" RESTful web app. The backend is deployed on Heroku, and the frontend is deployed on Netlify. Backend endpoints and frontend API calls follow standard naming conventions. **flashy** includes a container component to reduce the number of API calls. The user interface facilitates full CRUD on the deck and entry tables and presents a uniform, responsive style.

<br>

### Goals

Backend
- Build a Ruby on Rails server with RESTful JSON endpoints
- Build a database with three tables: users, decks, entries
- The user to decks association will be one to many
- The decks to entries association will be one to many
- Index, show, and create controller methods for the decks table
- Full CRUD controller methods for the entries table

Frontend
- React app with one container component, seven screen components, two "component components" and two shared components
- Set up axios calls for get and post on decks table
- Set up axios calls for full CRUD on the entries table
- Hold deck and entry information in state variables within the container component
- Use both CSS Flexbox and Grid
- Implement media queries for mobile and desktop

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| Create React App | Sets up the tools needed for a React App   |
| React Router DOM | Enables linking and routing to different components |
|      Axios       | Sends asynchronous HTTP requests to RESTful endpoints to perform CRUD on database |
|  Ruby on Rails   | Backend frameword written in Ruby |
|    PostgreSQL    | Imported as 'pg' in Rails, sets postgresql as the database for Active Record |
|    rack-cors     | Handles cross-origin resource sharing, makes cross-origin AJAX possible |
|      bcrypt      | Password hashing function for authentication |
|        jwt       | Token-based authentication for tracking logged in users on frontend |

<br>

### Client (Front End)

#### Wireframes

[Mobile Prototype](https://xd.adobe.com/view/6295745f-886e-42e0-8273-81997bc2a666-37c6/)

#### Mobile
<img src="https://i.imgur.com/GhFK64i.png" alt="signup" width="200"/> <img src="https://i.imgur.com/QbYl7kD.png" alt="signin" width="200"/> 
  
  
User home will display decks. Deck detail screens are the launching point for full CRUD on decks and entries.  
<img src="https://i.imgur.com/Z469cH9.png" alt="home" width="200"/><img src="https://i.imgur.com/gcXgDob.png" alt="deck" width="200"/>  
  
  
Some screens showing how post, update, and delete will work.  
<img src="https://i.imgur.com/ipIPjen.png" alt="edit entry" width="200"/><img src="https://i.imgur.com/rx9OUUe.png" alt="create deck" width="200"/><img src="https://i.imgur.com/oM3kwqI.png" alt="create entry" width="200"/>  
  
  
Users will be able to review the term and details for each entry in the deck and navigate to different screens via the hamburger.  
<img src="https://i.imgur.com/UdeZfci.png" alt="word front" width="200"/> <img src="https://i.imgur.com/Jhq4mre.png" alt="word back" width="200"/> <img src="https://i.imgur.com/QRNEkPt.png" alt="hamburger" width="200"/>  
  
  
In an earlier plan, editing the deck and its entries occurred in one screen. Not sure how this could be implemented, I decided against it. However, I still want to include this idea in case it is possible as a post-MVP.  
<img src="https://i.imgur.com/YsLL1LD.png" alt="deck" width="200"/> <img src="https://i.imgur.com/dJRpfyy.png?1" alt="manage" width="200"/> <img src="https://i.imgur.com/KoTgcL0.png?1" alt="create" width="200"/> <img src="https://i.imgur.com/sPjGA60.png?1" alt="create/manage bottom" width="200">  
  
  
#### Desktop
<img src="https://i.imgur.com/IuSUQTv.png" alt="signup" width="400"/> <img src="https://i.imgur.com/VjdeYCQ.png" alt="signin" width="400"/>  
  
  
The same home and deck view on desktop:  
<img src="https://i.imgur.com/RkESP1L.png" alt="home" width="400"/> <img src="https://i.imgur.com/SXxHhYS.png" alt="deck" width="400"/>  
  
  
Desktop CRUD:  
<img src="https://i.imgur.com/4dUuom0.png" alt="edit entry" width="400"/> <img src="https://i.imgur.com/oXKhypH.png" alt="create deck" width="400"/> <img src="https://i.imgur.com/hcV8vp1.png" alt="create entry" width="400"/>  
  
  
Reviewing entries:  
<img src="https://i.imgur.com/0kqZDYZ.png" alt="word front" width="400"/> <img src="https://i.imgur.com/RXinrxZ.png" alt="word back" width="400"/>  
  
  
Desktop version of my "earlier plan" that I hope might be possible at some point:  
<img src="https://i.imgur.com/pUDbRmW.png" alt="deck" width="400"/> <img src="https://i.imgur.com/GFA2uYB.png" alt="manage" width="400"/> <img src="https://i.imgur.com/Oort2w2.png" alt="create" width="400"/>  

#### Component Tree

![Flashy Component Tree 1](https://i.imgur.com/ZhzO2WO.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ icons
|__ components/
     |__ Deck
     |__ Entry
     |__ shared/
         |__ Layout
         |__ Nav
|__ containers
    |__ Flashcards
|__ screens/
    |__ DeckDetail
    |__ DeckForm
    |__ Decks
    |__ EntryDetail
    |__ EntryForm
    |__ SignIn
    |__ SignUp
|__ services/
    |__ apiConfig
    |__ decks
    |__ entries
    |__ users
|__ App.css
|__ App.js
|__ package.json

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend tables      |     H    |     1 hr       |    .5 hrs     |     .5 hrs  |
| Controllers & Models|     H    |     1 hr       |     3 hrs     |      3 hrs  |
| Seed data           |     H    |     1 hr       |   1.5 hrs     |    1.5 hrs  |
| API calls           |     H    |     2 hrs      |   2.5 hrs     |    2.5 hrs  |
| App.js routing      |     H    |     1 hr       |    1 hr       |      1 hr   |
| Containers setup    |     H    |     1 hr       |  2.5 hrs      |    2.5 hrs  |
| Screens setup       |     H    |     1 hr       |    1 hr       |      1 hr   |
| Components, Layout  |     H    |     1 hr       |    .5 hrs     |     .5 hrs  |
| Layout              |     H    |     1 hr       |     0 hrs     |      0 hrs  |
| Nav - w/o auth      |     H    |     2 hrs      |     2 hrs     |      2 hrs  |
| SignUp              |     H    |     2 hrs      |     2 hrs     |      2 hrs  |
| SignIn              |     H    |     2 hrs      |     1 hr      |      1 hr   |
| SignOut             |     H    |     2 hrs      |    .5 hrs     |     .5 hrs  |
| Nav - w/ auth       |     H    |     1 hr       |     2 hrs     |      2 hrs  |
| Decks               |     H    |     1 hr       |     1 hr      |      1 hr   |
| Deck                |     H    |     1 hr       |     1 hr      |      1 hr   |
| DeckDetail          |     H    |     2 hrs      |    .5 hrs     |     .5 hrs  |
| Entry               |     H    |     1 hr       |    .5 hrs     |     .5 hrs  |
| Study               |     H    |     2 hrs      |     4 hrs     |      4 hrs  |
| DeckForm            |     H    |     2 hrs      |     3 hrs     |      3 hrs  |
| EntryForm           |     H    |     2 hrs      |     3 hrs     |      3 hrs  |
| Global styles (CSS) |     M    |     2 hrs      |     2 hrs     |      2 hrs  |
| Grid (forms)        |     M    |     2 hrs      |     3 hrs     |      3 hrs  |
| Flex (decks/entries)|     M    |     2 hrs      |     2 hrs     |      2 hrs  |
| Media queries       |     M    |     2 hrs      |     2 hrs     |      2 hrs  |
| Flip effect         |     L    |     2 hrs      |     2 hrs     |      2 hrs  |
| Deck sharing        |     L    |     2 hrs      |     0 hrs     |      0 hrs  |
| AWL deck generator  |     L    |     2 hrs      |     0 hrs     |      0 hrs  |
| Linting             |     L    |     2 hrs      |   1.5 hrs     |    1.5 hrs  |
| TOTAL               |          |    46 hrs      |   45.5 hrs    |   45.5 hrs  |
  
  
### Server (Back End)

#### ERD Model

![Flashy ERD](https://i.imgur.com/IeGFjGE.jpg)
<br>

***

## Post-MVP

- Full CRUD for the decks table
- Tablet media queries
- Redirect create deck to create entry of same deck (perhaps with a "loading" screen in between)
- Add password requirements to front page (6 characters or more)
- Create invalid username and password messages
- Deck sharing - Enable users to make decks public and search/share/save other users' decks
- Flip effect - Animate entry detail screen so that the card "flips" between the term and its details
- AWL Deck Generator - Include a textbox for pasting articles that will scan and produce a list of article words that are in the Academic Word List (AWL) and create a deck from these words

***

## Code Showcase

I am proud of the conitional rendering that I did within the Flipcard component:
```
  return (
    <div
      className="flipcard-space"
      style={{ display: current === index ? "flex" : "none"}}
    >
    <div
        className="flipcard-div"
        onClick={handleClick}        
    >
        {front ? (
          <h3 className="term-side">{term}</h3>
        ) : (
          <p className="details-side">{details}</p>
        )} 
      </div>
      <p className="flipcard-count">{`${index+1}/${deck.length}`}</p>
    </div>
  );
```

## Code Issues & Resolutions

- To avoid getting too many "cannot read property ___ of null" errors, I learned to set up useEffects in this pattern: write the function first, then write a conditional ensuring the function only fires when the necessary variables actually exist. I had thought that the dependency array would automatically make sure no variables had null values, but that turned out not to be the case! Here is an example of a useEffect that uses this pattern:
```  
useEffect(() => {
    if (currentUser) {
      fetchDecks();
    }
  }, [currentUser]);
```
- My get request for entries turned out to be more difficult than I anticipated when I created the ERD. Since I wanted to get entries for just one user, the decks table had to serve as a through table. I modified the the user and entry models. For user:
```
has_many :entries, through: :decks
```
For entry:
```
has_one :user, through: :deck
```
And then, in the entries controller, I wrote this:
```  def index
    @entries = @current_user.entries
    render json: @entries, status: :ok
  end
```
In the above snippet, ```@current_user comes``` from the verify method in the authentication controller.
- The main route of my app - "/" - required authorization, so visitors would actually need to type in the url plus "/sign-up" to get started.  In my App.js file, I placed this line before the main authorized route ("/"):
```
{!currentUser && <Redirect to={{pathname: "/sign-up", state: {from: location}}} />}
```
Then in "/sign-up", I added this to the top of the JSX portion:
```
{currentUser && <Redirect to={ location.state.from}/>}
```
The variable "location" is useLocation from react-router-dom. It helps keep track of the user's route path. This step was intended to keep users from just being redirected to the sign up screen if they refreshed their browser window. However, this made it impossible for new users to sign up and access the authorized content because "location" would be null in that case. As a quick fix, I changed the "/sign-up" portion to this:
```
{currentUser && <Redirect to="/" />}
```
This makes it possible for people to actually sign up and see the home screen. The one disadvantage to this method is that a logged in user, when refreshing their screen, will be redirected back to the decks screen no matter what screen they were viewing beforehand.

- The last issue I encountered was a typo in my apiConfig.js file. Instead of writing "process.env.NODE_ENV", I had accidentally written "process.env.NODE_END". This made it so that my deployed front end only hoooked up to the local Rails server and could never hook up to the Heroku API. 
