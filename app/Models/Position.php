<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Position
 *
 * @property $id
 * @property $slug
 * @property $name
 * @property $type
 * @property $voting_limit
 * @property $order
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Position extends Model
{
    public $timestamps = false;

    static $rules = [
		'slug' => 'required',
		'name' => 'required',
		'type' => 'required',
		'voting_limit' => 'required',
		'order' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['slug','name','type','voting_limit','order'];

    /**
     * The candidates that belong to the position.
     */
    public function candidates()
    {
        return $this->belongsToMany(Candidate::class, 'position_candidates', 'position_id', 'candidate_id');
    }

}
