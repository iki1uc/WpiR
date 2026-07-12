export const WµR = {
    name: "WµR",
    type: "eintritt",
    mark: true,

    run(pxOut) {
        return {
            move: "WµR",
            action: "eintritt",
            mark: true,
            role: pxOut.role,
            text: pxOut.text,
            info: "WµR → Eintritt markiert"
        };
    }
};
