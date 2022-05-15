const formatter = (data) => {
    return data.map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(',')).join('\n');
}

export default formatter;