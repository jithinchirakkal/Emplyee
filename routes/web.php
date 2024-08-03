<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::middleware('auth')->group(function(){
    // Route::get('/Empregister', [EmployeeController::class, 'create'])->name('emp.create');
    Route::get('/dashboard', [EmployeeController::class, 'index'])->name('dashboard');
    Route::get('/Empregister', [EmployeeController::class, 'create'])->name('emp.create');
    Route::post('/Empregister', [EmployeeController::class, 'store'])->name('emp.store');
    Route::get('/Empregister/{employee}', [EmployeeController::class, 'edit'])->name('emp.edit');
    Route::put('/Empregister/{employee}', [EmployeeController::class, 'update'])->name('emp.update');
    Route::delete('/Empregister/{employee}', [EmployeeController::class, 'destroy'])->name('emp.destroy');
});

require __DIR__.'/auth.php';
