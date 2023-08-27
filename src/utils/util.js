export function filterShuttleImages(images, filters) {
    return images.filter(image => {
      // Apply your filtering conditions based on the search filters
      // For example, if filters.status is provided, check if the image's status matches the filter
      // Similarly, apply other filtering conditions
      return (
        (!filters.status || image.status === filters.status) &&
        (!filters.original_launch || image.original_launch === filters.original_launch) &&
        (!filters.type || image.type === filters.type)
      );
    });
  }
  