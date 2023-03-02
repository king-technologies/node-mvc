# Tution

> Advance JavaScript (Ajax) (Asynchronous JavaScript & XML)
> MVC
> SQL (MySQL)
> MongoDB (Mongoose)
> Session & Cookies
> Emails (Nodemailer)
> Image Upload (Multer) & Download Files
> Pagination
> Error Handling
> Payment Gateway (Stripe & PayPal)
> REST APIs
> WebSockets
> GraphQL
> Render & Vercel
> Testing
> TypScript
> Deno

## MVC

- Model View Controller

- Model: Dealing with database
  User -> Posts -> Comments
  Comment{
  id: String,
  content: String,
  creator: User
  }

        Post{
            id: String,
            title: String,
            content: String,
            image: String,
            creator: User,
            comments: [Comment]
        }
        User{
            id: String,
            name: String | Required,
            email: String | required | unique,
            password: String,
            posts: [Post]
        }

- View: Dealing with UI

- Controller: Dealing with business logic

- Rohit Jain
