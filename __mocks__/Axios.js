var mock = Object.create(null);

mock.get = (path, params) => {
    return Promise.resolve(
        {
            data: {
                articles: [
                    {
                        title: "Heading 1",
                        source: {
                            name: ""
                        },
                        publishedAt: ""
                    }
                ]
            }
        }
    );
}

export default mock;