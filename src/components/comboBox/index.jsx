/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import "../../assets/css/tailwind.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function ComboBox({ array, title }) {
  const [selected, setSelected] = useState(
    title === "hours" ? array[1] : array[0]
  );
  return (
    <div className="flex-1  group relative items-start justify-start border border-[#32414a] rounded-lg   focus-within:shadow-custom ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-full">
          <Listbox.Button className="relative w-full cursor-default rounded-lg  bg-[#1d2629] py-2 pl-3 pr-10 text-left shadow-md  focus:outline-none  sm:text-sm">
            <span className="block truncate">{selected.value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-48 w-full overflow-auto rounded-md bg-[#232E35] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {array.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 ${
                      active
                        ? "bg-[#2d3b45] text-[color:var(--color-base)]"
                        : "text-[color:var(--color-base)]"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {title == "hours"
                          ? `${person.value} saat`
                          : `${person.value} dakika`}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <div className="bg-[#232E35] rounded-tr-lg rounded-br-lg  px-3 flex items-center border-l border-[#32414a] justify-center h-full font-semibold text-center absolute right-0 top-1/2 -translate-y-1/2 text-white">
        {title}
      </div>
    </div>
  );
}

ComboBox.propTypes = {
  array: PropTypes.array,
  title: PropTypes.string,
};
