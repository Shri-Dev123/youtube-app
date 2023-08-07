const useValueAbbr = (value) => {
    const abbreviateNumber = (val) => {
        var newValue = val;
        if (val >= 1000) {
            var suffixes = ["", "k", "M", "B", "T"];
            var suffixNum = Math.floor(("" + val).length / 3);
            var shortValue = "";
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat(
                    (suffixNum !== 0
                        ? val / Math.pow(1000, suffixNum)
                        : val
                    ).toPrecision(precision)
                );
                var dotLessShortValue = (shortValue + "").replace(
                    /[^a-zA-Z 0-9]+/g,
                    ""
                );
                if (dotLessShortValue.length <= 2) {
                    break;
                }
            }
            if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
            newValue = shortValue + suffixes[suffixNum];
        }
        return newValue;
    };

    const abbreviatedValue = abbreviateNumber(value);
    return abbreviatedValue;
};

export default useValueAbbr;
