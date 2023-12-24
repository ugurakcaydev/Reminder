/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { GetAllUser } from "../../../../api/server";

export default function InvitePeopleInput({ invitedPeople, setInvitedPeople }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSelectPerson = (person) => {
    try {
      if (
        person != null &&
        !invitedPeople.some((invitedPerson) => invitedPerson.id === person.id)
      ) {
        setInvitedPeople([...invitedPeople, person]);
      }
    } catch (error) {
      console.error(error, "hata");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromServer = await GetAllUser();
      const usersData = usersFromServer.map((user) => ({
        id: user.Id,
        email: user.Email,
      }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);
  const filteredUsers =
    query === ""
      ? users
      : users.filter((user) =>
          user.email
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="relative">
      <Combobox value={selected?.email || ""} onChange={setSelected}>
        <div className="relative ">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-[#1d2629] text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder="Davet At"
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 bg-[#1d2629] text-white focus:ring-0 focus:outline-none"
              displayValue={(useremail) => useremail}
              onChange={(event) => setQuery(event.target.value || "")}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#2d3b45] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredUsers.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-white">
                  Nothing found.
                </div>
              ) : (
                filteredUsers.map((user) => (
                  <Combobox.Option
                    key={user.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-4 pr-4 ${
                        active ? "bg-[#1d2629] text-white" : "text-white"
                      }`
                    }
                    value={user}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {user.email}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSelectPerson(selected);
        }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-1/6 h-full bg-green-600 rounded-tr-lg rounded-br-lg flex items-center my-0.5 justify-center focus:outline-none"
      >
        Davet
      </button>
    </div>
  );
}
