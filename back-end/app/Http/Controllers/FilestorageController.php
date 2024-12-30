<?php

namespace App\Http\Controllers;

use App\Models\Filestorage;
use Illuminate\Http\Request;

class FilestorageController extends Controller
{
    public static function storeFile(Request $request, $folder, $fileInputName, $type)
    {
        if ($request->hasFile($fileInputName)) {
            $file = $request->file($fileInputName);
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs($folder, $fileName, 'public');

            return Filestorage::create([
                'path' => $filePath,
                'name' => $fileName,
                'extension' => $file->getClientOriginalExtension(),
                'type' => $type,
            ]);
        }

        return null;
    }
}
