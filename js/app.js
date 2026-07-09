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
    });

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: '0',
    }).format(number);
    
};