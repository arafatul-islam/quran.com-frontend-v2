class AdvanceCopyPresenter < BasePresenter
  def cache_key(action_name:)
    "advance_copy:#{action_name}-#{verse.id}-#{translations_ids}:#{fetch_locale}"
  end

  def translations_ids

  end

  def verse

  end
end
