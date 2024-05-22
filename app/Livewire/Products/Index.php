<?php

namespace App\Livewire\Products;

use App\Models\Product;
use Livewire\Attributes\Computed;
use Livewire\Component;

class Index extends Component
{
    public $query = '';
    #[Computed]
    public function products()
    {
        return Product::search($this->query)->get();
    }
    public function render()
    {
        return view('livewire.products.index');
    }
}
