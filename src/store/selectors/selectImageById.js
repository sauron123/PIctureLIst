const selectImageById = (state, id) => {

    return (state).find(x => x.id === parseInt(id));
};

export default selectImageById ;