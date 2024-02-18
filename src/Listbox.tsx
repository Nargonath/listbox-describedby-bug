import * as React from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export function ListBox() {
  const [selectedPerson, setSelectedPerson] = React.useState(people[0]);

  return (
    <>
      <Listbox
        as="div"
        value={selectedPerson}
        onChange={setSelectedPerson}
        name="test-list"
        aria-describedby="error-message"
      >
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <p id="error-message">some info</p>
    </>
  );
}
