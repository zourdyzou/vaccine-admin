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

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: StateOption) => <div>{suggestion.label}</div>;

export const AutocompleteBox: FunctionComponent = () => {
    const [query, setQuery] = useState('');
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
                    onChange: (_event, { newValue }) => setQuery(newValue),
                    name: 'address',
                }}
            />
        </Fragment>
    );
};
