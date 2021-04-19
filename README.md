# kyc-csv-processor

Containerized react, spring-boot and mongo-db, used to read kyc information [ name, phone, date of birth ] from a csv file and save in mongo db.

Docker images can be found here

1. []().
2. []().

## Demo

## Setup

Clone this repo from the `master` branch to your local machine using `https://github.com/jama5262/kyc-csv-processor.git`

After cloning, `cd` into the project

Great the project has been setup 👍

## Usage

_**Before you start using, please check that the ports `3000`, `8080` and `27017` are not in use**_

Port `3000` is used by react, port `8080` by spring-boot and port `27017` is used by mongo-db

To start using it locally, run the following `docker` command
```
docker-compose up
```

After that check your http://localhost:3000

## Support

Reach out to me at one of the following places!

- Email at jama3137@gmail.com
- Twitter [timedjama5262](https://twitter.com/timedjama5262)

## License

```
MIT License

Copyright (c) 2021 Jama Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```