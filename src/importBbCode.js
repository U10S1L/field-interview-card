const keyToMatchFn = {
    name: str => str?.match(/(?<=.*NAME \(FIRST.*\n{1}).*/g)?.[0],
    withSubject1_name: str => str?.match(/(?<=.*NAME \(FIRST.*\n{1}).*/g)?.[1],
    withSubject2_name: str => str?.match(/(?<=.*NAME \(FIRST.*\n{1}).*/g)?.[2],
}

const convertBbCodeToData = (bbCode) => {
    const data = {};
    for (const [key, matchFn] of Object.entries(keyToMatchFn)) {
        data[key] = matchFn(bbCode);
    }
    return data;
}

export default convertBbCodeToData;