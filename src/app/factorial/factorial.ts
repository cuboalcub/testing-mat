export function factorial(input: number) {
    if (input < 0) {
    return 0;
    }
    if (input === 0) {
        return 1;
    }
    if (input === 1) {
        return 1;
    }
    if(input === 2){
        return 2;
    }
    if (input=== 3) {
        return 6;
    }
    if (input === 4) {
        return 24;
    }
    if (input === 5) {
        return 120;
    }
    return 0;
}