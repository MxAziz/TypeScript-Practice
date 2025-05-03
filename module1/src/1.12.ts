const speed = (value: unknown) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`Speed in m/s: ${convertedSpeed}`);
    }
    else if (typeof value === 'string') {
        // const convertedSpeed = parseFloat(value) * 1000 / 3600;
        const [result, unit] = value.split(' ');
        const convertedSpeed = parseFloat(result) * 1000 / 3600;
        console.log(`Speed in m/s: ${convertedSpeed}`);
    } else {
        console.log('Invalid input type. Please provide a number or a string.');
    }
}
speed(5000)