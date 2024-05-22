<?php

namespace App\Livewire\Products;

use App\Models\Product;
use Livewire\Attributes\Validate;
use Livewire\Component;

class Create extends Component
{
    protected $listeners = ['barcodeScanned' => 'barcodeScanned'];
    #[Validate('required|min:3')]
    public $name = '';

    #[Validate('required')]
    public $code = '';
    private $type = 'typed';
    public function render()
    {
        return view('livewire.products.create');
    }

    public function save()
    {
        $this->validate();

        Product::create([
            'name' => $this->name,
            'code' => $this->code,
            'type' => $this->type
        ]);
        return $this->redirect('/');
    }

    public function barcodeScanned($code)
    {
        $this->code = $code;
        $this->type = 'scanned';
    }
}
