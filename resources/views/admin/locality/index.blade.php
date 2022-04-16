@extends('layouts.app')

@section('template_title')
    Locality
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Locality') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('localities.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Region</th>
										<th>Province</th>
										<th>City Dist</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($localities as $locality)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $locality->region }}</td>
											<td>{{ $locality->province }}</td>
											<td>{{ $locality->city_dist }}</td>

                                            <td>
                                                <form action="{{ route('localities.destroy',$locality->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('localities.show',$locality->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('localities.edit',$locality->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
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
                {!! $localities->links() !!}
            </div>
        </div>
    </div>
@endsection
