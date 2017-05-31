let inCodingameIde = true;
try {
    printErr;
} catch (e) {
    if (e instanceof ReferenceError) {
        inCodingameIde = false;
    } else {
        throw e;
    }
}

export function log(msg) {
    if (inCodingameIde) printErr(msg); 
    else console.log(msg);  
}

export class io {
    static addInputLine(line) {
        if (inCodingameIde) throw new Error("io.addInputLine should only be used in test");

        io.inputLineStore.push(line);
    }

    static getNextPrintCommand() {
        if (inCodingameIde) throw new Error("io.getNextPrintCommand should only be used in test");

        if (io.printLineStore.length === 0) {
            throw new Error('No print command');
        }
        return io.printLineStore.shift();
    }

    static readline() {
        if (inCodingameIde) {
            return readline();
        }

        if (io.inputLineStore.length === 0) {
            throw new Error('No line to read');
        }
        return io.inputLineStore.shift();
    }
    static print(command) {
        if (inCodingameIde) {
            print(command);
            return;
        }

        io.printLineStore.push(command);
    }
}
io.inputLineStore = [];
io.printLineStore = [];
