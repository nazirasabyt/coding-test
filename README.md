### Hi there 👋, 

This is a coding test for a flight booking website , built with Next.js that offers connection to Metamask.

Live Demo : https://coding-test-lzbh.vercel.app/


Flight flow consists of three-levels

First Level: Flight Form page to fill in all data about the required flight (origin "city(airport code)" - destination "city (airport code)" - departure date - return date - passenger count )
 
Second Level: passenger details page, depending on the number of passengers that entered in the first level, should show boxes to fill in passenger data, and each box, should have personal information

Third Level: payment page, Shows all data, entered in previous levels (first & second) and puts a button to pay when I click to pay, it should connect to meta mask wallet and make a fake transaction with a fake price

Its a quick fix without much of error handling. Also last page connects to metamask to make fake payment



this test app can only search for these cities

    "city": "London",
    "city": "Dubai",
    "city": "Paris",
    "city": "Iran",
    "city": "Antalya",
    "city": "Beijing",
    "city": "Moscow",

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


- 🔭 I’m currently working on error handling and styling 




