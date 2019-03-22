const selectImageById = (state, id) => {
    if (id === undefined ) return ;
    return (state).find(x => x.id === parseInt(id));
};

export default selectImageById ;