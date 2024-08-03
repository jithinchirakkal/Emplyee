<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(){
        $employees = Employee::all();
        return Inertia::render('Empdetails',[
            'Employees' => $employees
        ]);
    }


    public function store(Request $request){
        Employee::create($request->validate([
            'name' => 'required',
            'email' => ['required','email'],
            'phone' => ['required'],
        ]));
        return redirect()->route('dashboard');
    }

    public function create(){

        return Inertia::render('EmployeeRegister');
    }

    public function edit($id){
        $employee = Employee::findOrFail($id);
        return Inertia::render('EmployeeEdit',[
            'Emplo' => $employee
        ]);

    }

    public function update(Request $request, Employee $employee){

        $request->validate([
            'name' => 'required',
            'email' => ['required','email'],
            'phone' => ['required'],
        ]);

        $employee->update($request->all());

        return redirect()->route('dashboard');
    }

    public function destroy(Employee $employee){
        $employee->delete();
        return redirect()->route('dashboard');
    }
}

