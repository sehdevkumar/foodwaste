interface FoodItem {
  id: number;
  name: string;
  quantity: string;
  expiryDate: string;
  status: string;
}

export const fetchFoodItems = async (): Promise<FoodItem[]> => {
  try {
    const response = await fetch('/api/food-items');
    if (!response.ok) {
      throw new Error('Failed to fetch food items');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching food items:', error);
    throw error;
  }
};

export const getServerStatus = async (): Promise<{ message: string; timestamp: string }> => {
  try {
    const response = await fetch('/api/hello');
    if (!response.ok) {
      throw new Error('Failed to fetch server status');
    }
    return await response.json();
  } catch (error) {
    console.error('Error checking server status:', error);
    throw error;
  }
};