import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

// Initialize WooCommerce API client
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WC_URL!,
  consumerKey: process.env.WC_CONSUMER_KEY!,
  consumerSecret: process.env.WC_CONSUMER_SECRET!,
  version: "wc/v3"
})

export interface WooProduct {
  id: number
  name: string
  slug: string
  price: string
  regular_price: string
  sale_price: string
  description: string
  short_description: string
  images: {
    id: number
    src: string
    alt: string
  }[]
  attributes: {
    id: number
    name: string
    options: string[]
  }[]
  meta_data: {
    key: string
    value: any
  }[]
}

interface GetProductsParams {
  per_page?: number
  page?: number
  search?: string
  category?: string
  tag?: string
  status?: string
  featured?: boolean
  orderby?: 'date' | 'id' | 'title' | 'slug' | 'price' | 'popularity' | 'rating'
  order?: 'asc' | 'desc'
}

/**
 * Get all products with optional filtering
 */
export async function getProducts(params: GetProductsParams = {}): Promise<WooProduct[]> {
  try {
    const { data } = await api.get('products', params)
    return data
  } catch (error: any) {
    console.error('Error fetching products:', error.response?.data || error.message)
    return []
  }
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: number | string): Promise<WooProduct | null> {
  try {
    const { data } = await api.get(`products/${id}`)
    return data
  } catch (error: any) {
    console.error('Error fetching product:', error.response?.data || error.message)
    return null
  }
}

/**
 * Get a single product by slug
 */
export async function getProductBySlug(slug: string): Promise<WooProduct | null> {
  try {
    const { data } = await api.get('products', { slug })
    return data[0] || null // WooCommerce returns an array, but we only need the first item
  } catch (error: any) {
    console.error('Error fetching product by slug:', error.response?.data || error.message)
    return null
  }
}

/**
 * Get products by category ID or slug
 */
export async function getProductsByCategory(categoryId: number | string): Promise<WooProduct[]> {
  try {
    const { data } = await api.get('products', { category: categoryId })
    return data
  } catch (error: any) {
    console.error('Error fetching products by category:', error.response?.data || error.message)
    return []
  }
}

/**
 * Search products
 */
export async function searchProducts(searchTerm: string): Promise<WooProduct[]> {
  try {
    const { data } = await api.get('products', { search: searchTerm })
    return data
  } catch (error: any) {
    console.error('Error searching products:', error.response?.data || error.message)
    return []
  }
}

/**
 * Get featured products
 */
export async function getFeaturedProducts(): Promise<WooProduct[]> {
  try {
    const { data } = await api.get('products', { featured: true })
    return data
  } catch (error: any) {
    console.error('Error fetching featured products:', error.response?.data || error.message)
    return []
  }
} 