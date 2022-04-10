@extends('layouts.app')

@section('template_title')
    Position Candidate
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Position Candidate') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('position-candidates.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
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
                                        
										<th>Election Year</th>
										<th>Position Id</th>
										<th>Candidate Id</th>
										<th>Ballot Number</th>
										<th>Party</th>
										<th>Province Id</th>
										<th>City Id</th>
										<th>District Id</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($positionCandidates as $positionCandidate)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $positionCandidate->election_year }}</td>
											<td>{{ $positionCandidate->position_id }}</td>
											<td>{{ $positionCandidate->candidate_id }}</td>
											<td>{{ $positionCandidate->ballot_number }}</td>
											<td>{{ $positionCandidate->party }}</td>
											<td>{{ $positionCandidate->province_id }}</td>
											<td>{{ $positionCandidate->city_id }}</td>
											<td>{{ $positionCandidate->district_id }}</td>

                                            <td>
                                                <form action="{{ route('position-candidates.destroy',$positionCandidate->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('position-candidates.show',$positionCandidate->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('position-candidates.edit',$positionCandidate->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
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
                {!! $positionCandidates->links() !!}
            </div>
        </div>
    </div>
@endsection
