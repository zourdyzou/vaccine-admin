export interface StateOption {
    readonly id: string;
    readonly label: string;
    readonly value: string;
}

export const stateOptions: readonly StateOption[] = [
    { id: 'AL', label: 'Alabama', value: 'alabama' },
    { id: 'AK', label: 'Alaska', value: 'alaska' },
    { id: 'AZ', label: 'Arizona', value: 'arizona' },
    { id: 'AR', label: 'Arkansas', value: 'arkansas' },
    { id: 'CA', label: 'California', value: 'california' },
    { id: 'CO', label: 'Colorado', value: 'colorado' },
    { id: 'CT', label: 'Connecticut', value: 'connecticut' },
    { id: 'DE', label: 'Delaware', value: 'delaware' },
    { id: 'FL', label: 'Florida', value: 'florida' },
    { id: 'GA', label: 'Georgia', value: 'georgia' },
    { id: 'ID', label: 'Idaho', value: 'idaho' },
    { id: 'IN', label: 'Indiana', value: 'indiana' },
    { id: 'IA', label: 'Iowa', value: 'iowa' },
    { id: 'KS', label: 'Kansas', value: 'kansas' },
    { id: 'KY', label: 'Kentucky', value: 'kentucky' },
    { id: 'LA', label: 'Louisiana', value: 'louisiana' },
    { id: 'ME', label: 'Maine', value: 'maine' },
    { id: 'MI', label: 'Michigan', value: 'michigan' },
    { id: 'MN', label: 'Minnesota', value: 'minnesota' },
    { id: 'MS', label: 'Mississippi', value: 'mississippi' },
    { id: 'MO', label: 'Missouri', value: 'missouri' },
    { id: 'MT', label: 'Montana', value: 'montana' },
    { id: 'NE', label: 'Nebraska', value: 'nebraska' },
    { id: 'NV', label: 'Nevada', value: 'nevada' },
    { id: 'OK', label: 'Oklahoma', value: 'oklahoma' },
    { id: 'OR', label: 'Oregon', value: 'oregon' },
    { id: 'TN', label: 'Tennessee', value: 'tennessee' },
    { id: 'TX', label: 'Texas', value: 'texas' },
    { id: 'UT', label: 'Utah', value: 'utah' },
    { id: 'VT', label: 'Vermont', value: 'vermont' },
    { id: 'VA', label: 'Virginia', value: 'virginia' },
    { id: 'WI', label: 'Wisconsin', value: 'wisconsin' },
    { id: 'WY', label: 'Wyoming', value: 'wyoming' },
];
