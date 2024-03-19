# Tiixiio

Tiixiio is a developer tool for anyone who needs to know Nigeria, geographically at least. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs). Locale is looking to be a very useful tool for the thousands of businesses building for Nigeria’s 200M+ population size. 


## Features and Implementation Guide

– Authentication and Authorization: Locale as a developer should be protected and every developer who tries to access the API should have an API key to authenticate their request. Developers will have their API key generated for them when they sign up. They can only see this API key once.

– Search: Locale allows developers to search for information about Nigeria based on the following categories; region, state, and local government area(LGAs). It is possible that developers would want to search for a region with the states under them but not the local government. This also applies to states with LGAs. Locale should also return all metadata associated with each region, state, or LGA on search.

– General APIs: Developers on Locale should be able to get all regions, states, and LGA with an API(s)


## Run Locally

```bash
git clone https://github.com/oghene-ella/Tiixiio.git
```

Go to the project directory. you will see 2 folders

### For the Frontend
```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Start the styles server

```bash
  npm run build_css
```


### For the Backend
```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```
## Tech Stack

**Client:** React, TailwindCSS

**Server:** Nest Js, MongoDB

## Create an .env File
```bash
DB_URL=your_url

JWT_SECRET=your_jwt_secret_key

JWT_EXPIRES=your_expiry_date

CLIENT_SECRET=your_client_secret

CLIENT_ID=your_google_client_id

SECRET_KEY=your_secret_key
```

## Documentation

[Documentation](https://documenter.getpostman.com/view/13142275/2sA2xmUqQg)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

[@oghene-ella](https://github.com/oghene-ella)


## Support

For support, gmail: oghenekaro57@gmail.com.
