export function combineDimensions(dimensions) {
    const parsedDimensions = {
        ...dimensions,
        // Set default margin values in case none was given
        marginTop: dimensions.marginTop || 10,
        marginRight: dimensions.marginRight || 20,
        marginBottom: dimensions.marginBottom || 40,
        marginLeft: dimensions.marginLeft || 75
    }

    return {
        ...parsedDimensions,
        // Return dimesions of the inner svg element (excludes margins)
        // If the wrapper's dimensions weren't specified, returns zero
        boundedHeight: Math.max(
            parsedDimensions.height
            - parsedDimensions.marginTop
            - parsedDimensions.marginBottom,
            0
        ),
        boundedWidth: Math.max(
            parsedDimensions.width
            - parsedDimensions.marginRight
            - parsedDimensions.marginLeft,
            0
        )
    }
}