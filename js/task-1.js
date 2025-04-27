function slugify(title) {
    return title
        .trim()
        .toLowerCase()
        .split(" ")
        .join("-");
}