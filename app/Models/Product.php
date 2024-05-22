<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'code', 'type'];

    public function scopeSearch(Builder $query, string $searchString): void
    {
        $query->where('name', 'LIKE', '%'.$searchString.'%');
    }
}
