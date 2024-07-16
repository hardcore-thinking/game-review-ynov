export const generateId : (existingIds: number[]) => number = (existingIds : number[]) => {
    let id = -1;
    while (existingIds.includes(++id)) {}
    console.log(`Generated: ${id}`);
    return id;
}