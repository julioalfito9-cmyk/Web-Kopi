document.addEventListener('alpine:init', () => {
     Alpine.data('products', () => ({
        items: [
            {id: 1, name:'1', img: '1.jpg', price: 20000},
            {id: 2, name:'2', img: '2.jpg', price: 20000},
            {id: 3, name:'3', img: '3.jpg', price: 20000},
            {id: 4, name:'4', img: '4.jpg', price: 20000},
            {id: 5, name:'5', img: '5.jpg', price: 20000}
        ]
        }));

Alpine.store('cart', {
    items: [], 
    total: 0,
    quantity: 0,
    add(newItem) {
        const cartItem = this.items.find(item => item.id === newItem.id);

        if (cartItem) {
            cartItem.quantity += 1;
            cartItem.total = cartItem.price * cartItem.quantity;
        } else {
            this.items.push({
                ...newItem,
                quantity: 1,
                total: newItem.price
            });
        }

        this.quantity += 1;
        this.total += newItem.price;
    },

    increase(id) {
        const cartItem = this.items.find(item => item.id === id);
        if (!cartItem) return;

        cartItem.quantity += 1;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.quantity += 1;
        this.total += cartItem.price;
    },

    decrease(id) {
        const cartItem = this.items.find(item => item.id === id);
        if (!cartItem) return;

        cartItem.quantity -= 1;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.quantity -= 1;
        this.total -= cartItem.price;

        if (cartItem.quantity <= 0) {
            this.items = this.items.filter(item => item.id !== id);
        }
    }
    })
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: '0',
    }).format(number);
    
};