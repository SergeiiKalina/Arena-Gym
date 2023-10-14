const path = require("path")

module.exports = {
    // інші налаштування...
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images", // каталог виведення для оптимізованих зображень
                        },
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            // опції для інших оптимізаторів...
                        },
                    },
                ],
            },
        ],
    },
    // інші налаштування...
}
