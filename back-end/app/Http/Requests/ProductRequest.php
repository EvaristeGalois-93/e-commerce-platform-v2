<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $routeName = $this->route()->getActionMethod();

        if($routeName == 'filter_search'){
            return $this->filter_search();
        }

        if($routeName == 'most_popular_products'){
            return $this->most_popular_products();
        }


        if($routeName == 'store'){
            return $this->store();
        }

        return match($this->method()){
            'POST' => $this->store(),
            'PUT', 'PATCH' => $this->update(),
            'DELETE' => $this->destroy(),
            default => $this->view()
        };
    }

    public function store()
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'status' => 'required|string|max:255',
            'images' => 'required|array',
            'images.*' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'category_id' => 'required|array',
            'category_id.*' => 'required|numeric',
        ];
    }

    public function filter_search(){
        return [
            'category_id' => 'nullable|numeric',
            'filter_search' => 'nullable|string|max:255',
        ];
    }

    public function most_popular_products(){
        return [
            // 'category_id' => 'required|array',
            // 'category_id.*' => 'required|numeric',
        ];
    }
}
