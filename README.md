Application Requirements:

Create an interactive location selection component that dynamically populates country, state, and city dropdown menus based on API data and display it accordingly.

API Endpoints:

Get All Countries:

Endpoint: https://location-selector.labs.crio.do/countries

Get States of a Specific Country:

Endpoint: https://location-selector.labs.crio.do/country={countryName}/states

Get Cities of a Specific State in a Specific Country:

Endpoint: https://location-selector.labs.crio.do/country={countryName}/state={stateName}/cities

Upon initial render, 3 dropdowns (Select Country, Select State, Select City) must appear out of which only the first one must be allowing the users to view the dropdown list

When you select a particular country (e.g. Australia), you must be able to further select state using the Select State dropdown, but you must not be able to use the Select City dropdown yet.

Once you click on Select State, you must get a dropdown of list of states present in the selected country. For example, in our case, we must only be able to see the states that are a part of Australia.

Once you select a particular state, you must be able to choose a city using the Select City dropdown.

Once you select a particular city, you must get a statement on the frontend in the following format:

“You selected City, State, Country”
