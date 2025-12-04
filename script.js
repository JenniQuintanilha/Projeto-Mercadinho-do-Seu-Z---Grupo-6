const API_URL = 'http://localhost:3000/api/produtos';

// ex qnd api nn estiver disponivel
let produtos = [
    { id: 1, nome: 'Arroz Branco 5kg', preco: 18.90, descricao: 'Arroz branco tipo 1', estoque: 25 },
    { id: 2, nome: 'Feijão Preto 1kg', preco: 8.50, descricao: 'Feijão preto selecionado', estoque: 15 },
    { id: 3, nome: 'Açúcar Cristal 1kg', preco: 4.20, descricao: 'Açúcar cristal refinado', estoque: 30 }
];

// Carregar produtos ao iniciar
document.addEventListener('DOMContentLoaded', loadProducts);
document.getElementById('productForm').addEventListener('submit', addProduct);

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            produtos = await response.json();
        }
    } catch (error) {
        console.log('API não disponível, usando dados locais');
    }
    renderProducts(produtos);
}

function renderProducts(produtos) {
    const productList = document.getElementById('productList');
    
    if (produtos.length === 0) {
        productList.innerHTML = '<div class="loading">Nenhum produto encontrado</div>';
        return;
    }

    productList.innerHTML = produtos.map(produto => `
        <div class="product-card">
            <div class="product-name">${produto.nome}</div>
            <div class="product-price">R$ ${parseFloat(produto.preco).toFixed(2)}</div>
            <div class="product-description">${produto.descricao || 'Sem descrição'}</div>
            <div class="product-stock">Estoque: ${produto.estoque} unidades</div>
            <div class="product-actions">
                <button class="btn-danger" onclick="deleteProduct(${produto.id})">Excluir</button>
            </div>
        </div>
    `).join('');
}

async function addProduct(e) {
    e.preventDefault();
    
    const produto = {
        id: Date.now(),
        nome: document.getElementById('nome').value,
        preco: parseFloat(document.getElementById('preco').value),
        descricao: document.getElementById('descricao').value,
        estoque: parseInt(document.getElementById('estoque').value)
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            loadProducts();
        } else {
            throw new Error('API não disponível');
        }
    } catch (error) {
        // Adicionar localmente se API não estiver disponível
        produtos.push(produto);
        renderProducts(produtos);
    }
    
    document.getElementById('productForm').reset();
}

async function deleteProduct(id) {
    if (confirm('Excluir produto?')) {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (response.ok) {
                loadProducts();
            } else {
                throw new Error('API não disponível');
            }
        } catch (error) {
            // Excluir localmente se API não estiver disponível
            produtos = produtos.filter(p => p.id != id);
            renderProducts(produtos);
        }
    }
}