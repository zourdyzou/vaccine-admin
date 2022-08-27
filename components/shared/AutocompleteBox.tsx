import { Fragment, FunctionComponent, useState } from 'react';
import Autosuggest from 'react-autosuggest';

import { stateOptions, StateOption } from '@/utils/data-location';

// Teach Auto-suggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : stateOptions.filter(
              (stateData) => stateData.label.toLowerCase().slice(0, inputLength) === inputValue,
          );
};

// When suggestion is clicked, Auto-suggest needs to populate the input
// based on the clicked suggestion. Teach Auto-suggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: StateOption) => suggestion.label;

// render suggestions.
const renderSuggestion = (suggestion: StateOption) => (
    <div className="bg-indigo-700 px-4 py-2 rounded-md font-medium mt-1 cursor-pointer hover:bg-indigo-900">
        {suggestion.label}
    </div>
);

interface AutocompleteProps {
    value: string;
    setAddress: (value: string) => void;
}

export const AutocompleteBox: FunctionComponent<AutocompleteProps> = ({ value, setAddress }) => {
    const [query, setQuery] = useState(value);
    const [suggestions, setSuggestions] = useState<StateOption[]>([]);

    return (
        <Fragment>
            <Autosuggest
                suggestions={suggestions}
                getSuggestionValue={getSuggestionValue}
                onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                onSuggestionsClearRequested={() => setSuggestions([])}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    placeholder: 'State Address',
                    value: query,
                    onChange: (_event, target) => {
                        setQuery(target.newValue);
                        setAddress(target.newValue);
                    },
                    name: 'address',
                    className:
                        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2',
                }}
            />
        </Fragment>
    );
};
