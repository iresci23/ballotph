@extends('layouts.app')

@section('template_title')
    Position
@endsection

@section('header')
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Position') }}
        </h2>

        <div class="float-right">
            <a href="{{ route('positions.create') }}" class="btn btn-primary btn-sm float-right button-gradient p-2 rounded"  data-placement="left">
                {{ __('Create New') }}
            </a>
        </div>
    </div>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">

                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="overflow-x-auto p-3 bg-white rounded">
                            <table class="w-full whitespace-nowrap table-theme">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Slug</th>
										<th>Name</th>
										<th>Type</th>
										<th>Voting Limit</th>
										<th>Order</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($positions as $position)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $position->slug }}</td>
											<td>{{ $position->name }}</td>
											<td>{{ $position->type }}</td>
											<td>{{ $position->voting_limit }}</td>
											<td>{{ $position->order }}</td>

                                            <td>
                                                <form action="{{ route('positions.destroy',$position->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('positions.show',$position->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('positions.edit',$position->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $positions->links() !!}
            </div>
        </div>
    </div>
@endsection
