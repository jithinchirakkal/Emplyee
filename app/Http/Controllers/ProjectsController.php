<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $projects = Project::with(['emploid'])->latest()->get();
    //     return Inertia::render('Prodetails',[
    //         'Projects' => $projects
    //     ]);
    // }

    public function index(Request $request){

        $search = $request->query('search');

        $projects = Project::when($search, function ($query, $search) {
            return $query->where('title', 'like', '%' . $search . '%');
        })->get();

        return Inertia::render('Prodetails', [
            'Projects' => $projects,
            'search' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   
        $employees = Employee::all();
        return Inertia::render('Projassign',[
            'Employees' => $employees
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Project::create($request->validate([
            'title' => 'required',
            'description' => 'required',
            'employee_id' => 'required',
        ]));
        return redirect()->route('project.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $projects)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Project $project)
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        $employees = Employee::all();
        // $project = Project::all();
        return Inertia::render('ProDedit',[
            'Employees' => $employees,'project' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Project $projects)
    // {
    //     dd($request->all()); // Debug statement to see the request data
    //     $request->validate([
    //         'title' => 'required',
    //         'description' => 'required',
    //         'employee_id' => 'required',
    //     ]);

    //     $projects->update($request->all());

    //     return redirect()->route('project.index');
    // }

    public function update(Request $request, $id)
    {
        // dd($request->all()); 
        
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'employee_id' => 'required',
        ]);
        $project = Project::findOrFail($id);
        $project->update($request->all());

        return redirect()->route('project.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('project.index');
    }
}
