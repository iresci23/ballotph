<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Candidate
 *
 * @property $id
 * @property $name
 * @property $profile_url
 * @property $created_at
 * @property $updated_at
 *
 * @property PositionCandidate[] $positionCandidates
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Candidate extends Model
{
    
    static $rules = [
		  'name' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'picture', 'profile_url'];
    
    protected $appends = ['current_position'];


    public function getCurrentPositionAttribute()
    {
      // dd($this->positions()->first()->pivot);
      return $this->positions()->first();
    }

    /**
     * Scope a query to only get candidates by specific positions
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $positions
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePosition($builder, $positions)
    {
      return $builder->whereHas('positions', function($query) use($positions) {
          $query->where('election_year', config('election.year', 2022))->whereIn('slug', $positions);
      });
    }

    /**
     * The positions that belong to the candidate.
     */
    public function positions()
    {
        return $this->belongsToMany(Position::class, 'position_candidates', 'candidate_id', 'position_id')
                    ->withPivot('ballot_number');
    }
}
